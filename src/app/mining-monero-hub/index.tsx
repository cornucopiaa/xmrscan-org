import * as React from 'react';
import '../home/home.scss';
import { MemPool } from 'components/tables/mempool';
import { Blocks } from 'components/tables/blocks';
import { MoneroGraph } from 'components/line-graph/xmr';
import MetaTags from 'react-meta-tags';

export class MiningMoneroHub extends React.Component {
  public state = {
    width: 400,
    height: 100
  };

  public componentWillMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);
  }

  public componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  public updateDimensions = () => {
    const clientWidth = document.documentElement.clientWidth;
    // take rem into account when adjusting width for padding
    const width =
      clientWidth <= 1016 ? (clientWidth > 600 ? clientWidth - 64 : clientWidth - 26) : 400;
    const height = clientWidth > 600 && clientWidth <= 1016 ? 150 : 100;
    // adjust for border width
    this.setState({ width: width - 2, height });
  };

  public render() {
    const { width, height } = this.state;
    const structuredJSON = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How long does a Monero transfer take?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'In order for Monero transfers to become valid, they need to be put into a block. On average, one Monero blockchain block is generated in 2 minutes.'
          }
        },
        {
          '@type': 'Question',
          name: 'How many confirmations do Monero transactions require?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'Theoretically, it only takes one confirmation (or rather 2 minutes) for a Monero transaction to be done.'
          }
        },
        {
          '@type': 'Question',
          name: 'What is the transaction fee for Monero? Are Monero transactions expensive?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'There are different factors that influence how much fee is charged on a Monero transaction. The level of priority indicated on the transaction will also influence the fees paid. First, demand and supply play a huge role in Monero transaction fees. Other factors that may be key include the cost of electricity, the competition between miners, and the cost of hardware. Unknown to many, when you want to send Monero coins that were sent to you as fragments, the transaction fee is increased too.'
          }
        },
        {
          '@type': 'Question',
          name: 'Is Monero a standalone blockchain? If so, how does it work?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              "Monero is one of the few privacy-oriented blockchain coins in existence. It is built on a public distributed ledger and all transactions conducted are anonymous. A block's transaction count is calculated by taking the median of the past 100 blocks and multiplying it by two."
          }
        },
        {
          '@type': 'Question',
          name: 'Exactly what is a Monero address? And how does it work?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'Monero addresses are public identifiers where a recipient gets paid. It is gotten from a randomly-generated sequence of a private key. Sending your address does not disclose info on your balance and past transactions. Why? Transactions in Monero are sent to stealth addresses different from your original public key and Monero blockchain doesn’t show the data the same way Bitcoin or Ethereum blockchains do.'
          }
        },
        {
          '@type': 'Question',
          name: 'In what way does the Monero network work?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'Operating through a peer-to-peer system, Monero is a blockchain designed to support anonymous transactions. It is easy to join the Monero network and run nodes insomuch as the user has a stable internet and an internet-enabled device. The miners are responsible for processing transactions into blocks, which are in turn added to the final blockchain by validation from the whole network.'
          }
        }
      ]
    });

    return (
      <>
        <section className="card New-User-CTA">
          <div className="New-User-CTA-text-wrapper">
            <h1 className="New-User-CTA-title">How to Mine Monero (XMR)</h1>
            <p className="New-User-CTA-text">
              Monero mining involves using computational power to validate transactions and secure
              the blockchain. It uses a Proof-of-Work (PoW) algorithm called RandomX, optimized for
              CPUs. Miners earn XMR as rewards for solving cryptographic puzzles, contributing to
              network decentralization and security.
            </p>
          </div>
          <MoneroGraph width={width} height={height} />
        </section>
        <section className="card New-User-CTA">
          <div className="New-User-CTA-text-wrapper">
            <h2 className="New-User-CTA-title New-User-CTA-title-md">
              Best Hardware for Monero Mining
            </h2>
            <p className="New-User-CTA-text">
              When choosing mining hardware, CPUs generally outperform GPUs for Monero mining due to
              the RandomX algorithm. High-performance models such as AMD Ryzen 9 and Intel i9 series
              are popular among miners. Setting up an efficient mining rig with adequate cooling and
              power management is crucial for long-term profitability.
            </p>
          </div>
        </section>
        <MemPool />
        <section className="card New-User-CTA">
          <div className="New-User-CTA-text-wrapper">
            <h2 className="New-User-CTA-title New-User-CTA-title-md">
              Recommended Mining Software
            </h2>
            <p className="New-User-CTA-text">
              Software options like XMRig and Monero GUI miner are widely used. These applications
              allow you to configure mining settings, connect to pools, and monitor hash rates.
              Choosing the right software depends on your hardware and level of technical expertise.
            </p>
          </div>
        </section>
        <Blocks />
        <section className="card New-User-CTA">
          <div className="New-User-CTA-text-wrapper">
            <h2 className="New-User-CTA-title New-User-CTA-title-md">Setting Up Your Mining Rig</h2>
            <p className="New-User-CTA-text">
              Setting up involves installing mining software, configuring the CPU settings, and
              connecting to a mining pool. Proper ventilation and stable power sources are essential
              to prevent overheating and downtime.
            </p>
          </div>
        </section>
        <MetaTags>
          <title>Monero Mining: How to Mine XMR | XMRscan</title>
          <meta
            name="description"
            content="Discover how to mine Monero efficiently. Learn about hardware, software, pools, and tips to maximize profitability."
          />
          <meta property="og:title" content="Monero Mining: How to Mine XMR | XMRscan" />
          <meta name="og:title" content="Monero Mining: How to Mine XMR | XMRscan" />
          <meta
            name="og:description"
            content="Discover how to mine Monero efficiently. Learn about hardware, software, pools, and tips to maximize profitability."
          />
          <meta property="og:url" content="https://xmrscan.org/" />
          <meta property="og:type" content="website" />
          <meta
            name="twitter:description"
            content="Discover how to mine Monero efficiently. Learn about hardware, software, pools, and tips to maximize profitability."
          />
          <meta name="twitter:title" content="Monero Mining: How to Mine XMR | XMRscan" />
          <meta name="application-name" content="XMRScan" />
          <meta name="apple-mobile-web-app-title" content="XMRScan" />
          <script type="application/ld+json">{structuredJSON}</script>
          <link rel="canonical" href="https://xmrscan.org/" />
        </MetaTags>
        <section className="promo">
          <h3>FAQs about Mining Monero</h3>
          <p>
            What hardware is best for mining Monero?<br />
            The most efficient hardware for Monero mining is typically high-performance CPUs like
            AMD Ryzen 9 or Intel i9 series. GPUs are less efficient due to Monero's RandomX
            algorithm, which is CPU-optimized.
          </p>

          <p>
            Is it profitable to mine Monero at home?<br />
            Profitability depends on factors like electricity costs, hardware efficiency, and market
            price. Mining at home can be profitable if the hardware is energy-efficient and the
            electricity cost is low.
          </p>

          <p>
            Can I mine Monero on my smartphone?<br />
            While technically possible, mining Monero on a smartphone is inefficient and could
            damage the device due to heat and processing demands. It is generally not recommended.
          </p>
        </section>
      </>
    );
  }
}
