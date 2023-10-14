<script lang="ts">
	import { aboutVisible } from './stores';
</script>

<div id="about-wrapper">
	<div id="about">
		<div class="button-wrapper">
			<button aria-label="close" on:click={() => aboutVisible.set(false)}>
				<span class="material-symbols-sharp"> close </span></button
			>
		</div>
		<section class="body">
			<p>
				La principale strategia istituzionale per limitare il riscaldamento globale e realizzare un
				futuro a bassa intensità di carbonio si risolve, ad oggi, nella transizione a forme di
				energia "pulite". Le tecnologie di base di questa transizione come batterie ricaricabili,
				pannelli solari e turbine eoliche sono tuttavia caratterizzate da un'alta "intensità
				minerale", come dichiara la stessa Banca Mondiale (Hund et. al., 2020), ossia dalla
				necessità di reperire alcune materie prime in nuove e ben più ingenti quantità rispetto a
				precedenti cicli di accumulazione (Carrara et. al., 2023). Nonostante la necessitò crescente
				di approvvigionare il sistema produttivo europeo di queste materie prime critiche, i paesi
				membri sono fortemente dipendenti dall'importazione di queste materie prime da paesi esteri.
				La risposta istituzionale a queste criticità consiste in un tentativo duplice, annunciato da
				Ursula von der Leyen durante il discorso sullo stato dell'Unione nel 2022 e successivamente
				articolato a marzo 2023 in un "insieme globale di azioni per garantire l'accesso dell'UE a
				un approvvigionamento sicuro, diversificato, economicamente accessibile e sostenibile di
				materie prime critiche", noto come il Raw Materials Act (European Commission, 2023). Questa
				proposta prevede una strategia duplice: da un lato, diversificare gli input di materie prime
				critiche tramite la stipula di accordi con nuovi partner commerciali internazionali,
				dall'altro stimolare la ricerca e l'estrazione delle stesse all'interno della stessa
				Eurozona. La proposta di legge sui CRM stabilisce infatti un obiettivo del 10% di materie
				prime critiche da estrarre all’interno della stessa UE al 2030, nel tentativo di aumentare
				in modo significativo la quota interna di minerali necessari alla transizione e rinforzare
				così una sorta di "sovranità estrattiva" nel segno della sicurezza e della resilienza. Nel
				concreto, queste direttive mireranno a facilitare ed accelerare l'apertura di nuovi siti
				estrattivi e relative fasi di trasformazione del minerale, riducendo per esempio gli oneri
				amministrativi relativi ai permessi, semplificando e riducendo le procedure di
				autorizzazione dei progetti e garantendo un maggiore sostegno nell'accesso ai finanziamenti
				necessari per lo sviluppo di progetti estrattivi. Questi sviluppi recenti in seno alle
				politiche europee suggeriscono come l'ampliamento e l'accelerazione dell'estrazione
				mineraria all'interno dell'Eurozona siano indicati come una strategia essenziale per
				garantire l'indipendenza dell'UE nel reperimento di materie prime critiche e nel realizzare
				la transizione energetica. In questo senso, le frontiere della transizione energetica si
				addentrano non solo nelle viscere dei paesi storicamente sfruttati per le loro risorse, ma
				anche nel sottosuolo del continente.
				<br /><br />
				All'interno di questo scenario europeo, già si assiste ad una significativa espansione delle
				concessioni per permessi di ricerca mineraria in diversi territori della penisola italiana. Il
				sottosuolo della penisola è infatti storicamente ricco di risorse minerarie, spesso sfruttate
				dall'età antica fino a qualche decennio fa, e quindi si configura oggi come un fertile terreno
				di ricerca per numerose materie prime critiche come cobalto, litio, nichel, grafite e rame. Casi
				ad oggi noti comprendono ad esempio il
				<a
					href="https://www.internazionale.it/essenziale/notizie/marina-forti/2023/03/06/piemonte-miniere-cobalto"
					about="_blank"
					target="_blank"
					rel="noopener noreferrer"
				>
					progetto Punta Corna</a
				>
				sulla Alpi piemontesi o il
				<a
					href="https://www.open.online/2023/04/24/campagnano-di-roma-litio-miniera-dove-sta/"
					about="_blank"
					target="_blank"
					rel="noopener noreferrer">distretto del litio geotermico</a
				>
				a cavallo fra Toscana e Lazio, entrambi casi già riportati dalla cronaca nazionale. Al di là
				dei casi isolati è però complicato tracciare un quadro d'insieme di queste dinamiche, che permetta
				di individuarne le reali dimensioni territoriali e di costruirne un'analisi critica informata.
				Almeno due fattori concorrono a rendere difficoltosa questa informazione: da un lato, la scarsa
				consapevolezza rispetto alla reale intensità minerale della transizione energetica e quindi la
				sostanziale mancanza di un dibattito pubblico e politico sull'argomento, dall'altro dalla straordinaria
				frammentazione istituzionale che caratterizza la gestione delle risorse minerarie in Italia.
				Non è infatti disponibile alcun dataset a copertura nazionale che permetta di individuare le
				aree interessate da permessi di ricerca geologica o coltivazione mineraria, una mancanza probabilmente
				dovuta al principio di autonomia regionale per cui la ricerca e la coltivazione sono in capo
				alle Regioni, fatto salvo per le eventuali Valutazioni di Impatto Ambientale di cui è responsabile
				il Ministero dell'Ambiente e della Sicurezza Energetica. I dati geografici relativi ai permessi
				di ricerca e coltivazione sono, quindi, di difficile reperimento nelle diverse, frammentate e
				disomogenee banche dati regionali.
				<br /><br />
				Questa carta interattiva è un tentativo di sopperire a queste difficoltà interpretative. Sono
				qui raccolti e progressivamente aggiornati alcuni dati cartografici relativi ai permessi di ricerca
				mineraria per materie prime critiche (CRM) ad oggi attivi in Italia, con l'obiettivo di rendere
				unitari, leggibili e accessibili i dati geografici relativi a queste concessioni e di offrire
				così una piattaforma utile ad ulteriori ricerche ed inchieste sul tema. I permessi sono attualmente
				catalogati in base allo stato di avanzamento dei lavori (in approvazione, approvato oppure scaduto).
				Il dataset contiene diverse informazioni per ogni permesso di ricerca, come ad esempio il titolare,
				le superfici coinvolte, i minerali oggetto della ricerca e così via, oltre ad un weblink alla
				documentazione ufficiale di progetto.
			</p>
		</section>
		<hr />
		<section class="bibliography">
			<h2>Bibliografia</h2>
			<p>
				Carrara, S. et al. (2023) Supply chain analysis and material demand forecast in strategic
				technologies and sectors in the EU – A foresight study, Publications Office of the European
				Union.
			</p>
			<p>
				European Commission (2023), Proposal for a Regulation of The European Parliament and of the
				Council establishing a framework for ensuring a secure and sustainable supply of critical
				raw materials and amending Regulations (EU) 168/2013, (EU) 2018/858, 2018/1724 and (EU)
				2019/1020.
			</p>
			<p>
				Hund, K., La Porta, D., Fabregas, T., Laing, T., & Drexhage, J. (2020). Minerals for Climate
				Action: The Mineral Intensity of the Clean Energy Transition. Washington, DC: The World
				Bank.
			</p>
		</section>
		<hr />
		<section class="credits">
			<h2>Credits</h2>
			<div class="credits-container">
				<p>Contenuti e Ricerca</p>
				<p>Graphic e Web Design</p>
				<p>Web Development</p>
				<p>Alberto Valz Gris</p>
				<p>Matteo Bettini</p>
				<p>Luca Draisci</p>
				<p>
					Il dataset è in costante evoluzione tanto quanto le dinamiche di cui si occupa, pertanto
					segnalazioni e/o osservazioni sono più che gradite a &lt;<a
						href="mailto:info@frontieredellatransizione.it">info@frontieredellatransizione.it&gt;</a
					>
				</p>
			</div>
		</section>
	</div>
</div>

<style>
	#about-wrapper {
		position: absolute;
		background-color: var(--background-85);
		border-radius: 24px;
		margin: 24px;
		padding: 24px 12%;
		height: calc(100% - 96px);
	}

	#about {
		overflow-y: scroll;
		overflow-x: hidden;
		margin: 0 24px;
		position: relative;
		height: 100%;
		scrollbar-width: none;
		-ms-overflow-style: none;
	}

	#about::-webkit-scrollbar {
		display: none;
	}

	.button-wrapper {
		display: flex;
		justify-content: center;
		margin-bottom: 24px;
	}

	button {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: transparent;
		border: 1px solid var(--primary);
		color: var(--primary);
		margin: 6px;
	}

	.body > p {
		font-family: 'IBM Plex mono', monospace;
		font-size: 17px;
		line-height: 22px;
		margin-bottom: 96px;
		font-weight: 500;
	}

	.bibliography,
	.credits {
		margin-bottom: 96px;
	}

	.bibliography > *,
	.credits > h2,
	.credits > div > * {
		font-family: 'IBM Plex Sans', sans-serif;
		font-size: 14px;
		line-height: 18px;
		font-weight: 500;
	}

	.credits {
		display: flex;
		flex-direction: column;
	}

	.credits-container {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		grid-template-rows: repeat(3, minmax(0, 1fr));
		grid-auto-flow: column;
	}

	.credits-container > p:last-child {
		grid-column: 3 / span 2;
		grid-row: 1 / span 3;
	}

	.credits-container > p {
		margin: 0;
	}

	p {
		text-transform: none;
	}

	a {
		text-transform: none;
		font-weight: 500;
		color: var(--primary);
	}

	section > h2 {
		font-size: 14px;
	}

	hr {
		border: 2px solid var(--primary);
	}

	@media (max-width: 480px) {
		#about-wrapper {
			margin: 12px;
			width: calc(100% - 48px);
			padding: 24px 12px;
		}

		#about {
			margin: 0 12px;
		}

		.body > p {
			font-size: 10px;
			line-height: 13px;
		}

		.credits-container {
			grid-template-columns: repeat(2, minmax(0, 1fr));
			grid-template-rows: repeat(6, minmax(0, 1fr));
		}

		.credits-container > p:last-child {
			grid-column: 1 / span 2;
			grid-row: 4 / span 3;
			margin-top: 24px;
		}

		.credits {
			margin-bottom: 12px;
		}
	}
</style>
