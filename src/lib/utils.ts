import type { Feature, Polygon, MultiPolygon, FeatureCollection } from "geojson";

export interface svgData {
  viewBoxWidth: number,
  viewBoxHeight: number,
  pathData: string
}

export function formatDate(date: string | undefined) {
  date = date != "N/A"
    ? new Date(date as string).toLocaleDateString("it-IT", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "N/A";
  return date;
}

function calculateBoundingBox(geometry : Polygon | MultiPolygon): [number, number, number, number] {
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;
  
  // Assuming the geometry type is Polygon or MultiPolygon
  const polygons = geometry.type === 'Polygon' ? [geometry.coordinates] : geometry.coordinates;

  for (const polygon of polygons) {
      for (const ring of polygon) {
          for (const [x, y] of ring) {
              minX = Math.min(minX, x);
              minY = Math.min(minY, y);
              maxX = Math.max(maxX, x);
              maxY = Math.max(maxY, y);
          }
      }
  }
  
  return [minX, minY, maxX, maxY];
}


export function renderSVGfromFeature(
  feature: Feature<Polygon | MultiPolygon>,
): svgData {
  const coords = feature.geometry.coordinates[0][0] as [number, number][]; // Extract the first set of coordinates for a simple polygon
  const bbox = calculateBoundingBox(feature.geometry);
  const width = bbox[2] - bbox[0];
  const height = bbox[3] - bbox[1];
  const bboxAspectRatio = width / height;

  let viewBoxWidth = 100;
  let viewBoxHeight = 100;

  if (bboxAspectRatio > 1) {
    viewBoxHeight = 100 / bboxAspectRatio;
  } else {
    viewBoxWidth = 100 * bboxAspectRatio;
  }

  const normalizedCoords: [number, number][] = coords.map((coord: [number, number]) => [
    ((coord[0] - bbox[0]) / width) * viewBoxWidth,
    viewBoxHeight - ((coord[1] - bbox[1]) / height) * viewBoxHeight,  // Flip vertically
  ]);

  const moveTo = `M${normalizedCoords[0][0]},${normalizedCoords[0][1]} `;
  const lineTos = normalizedCoords.slice(1).map(coord => `L${coord[0]},${coord[1]} `).join('');
  const pathData = moveTo + lineTos + 'Z';

  //return `<svg width="100" height="100" viewBox="0 0 ${viewBoxWidth} ${viewBoxHeight}" xmlns="http://www.w3.org/2000/svg">
  //  <path d="${pathData}" fill="none" stroke="currentColor"/>
  //</svg>`;
  return {
    viewBoxWidth: viewBoxWidth,
    viewBoxHeight: viewBoxHeight,
    pathData: pathData
  }
}

export function sortByAspectRatio(featureCollection : FeatureCollection<Polygon | MultiPolygon>) : [Feature<Polygon | MultiPolygon>[], Feature<Polygon | MultiPolygon>[]] {
  const widePolygons: Feature<Polygon | MultiPolygon>[] = []
  const tallPolygons: Feature<Polygon | MultiPolygon>[] = []

  for (const feature of featureCollection.features) {
    const bbox = calculateBoundingBox(feature.geometry);
    const width = bbox[2] - bbox[0];
    const height = bbox[3] - bbox[1];
    const bboxAspectRatio = width / height;

    if (bboxAspectRatio > 1) {
      widePolygons.push(feature);
    } else {
      tallPolygons.push(feature);
    }
  }

  return [widePolygons, tallPolygons]
}