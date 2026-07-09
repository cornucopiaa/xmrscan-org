import * as React from 'react';
import '../home/home.scss';
import { MemPool } from 'components/tables/mempool';
import { Blocks } from 'components/tables/blocks';
import { MoneroGraph } from 'components/line-graph/xmr';
import MetaTags from 'react-meta-tags';

export class MoneroInfoHub extends React.Component {
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
            <h1 className="New-User-CTA-title">Everything You Need to Know About Monero</h1>
            <p className="New-User-CTA-text">
              Monero (XMR) is a cryptocurrency that enables untraceable transactions. Unlike many
              other blockchains, Monero masks sender and receiver addresses, as well as transaction
              amounts, ensuring anonymity. It operates on a proof-of-work consensus mechanism and
              emphasizes resistance to specialized mining hardware, allowing for more decentralized
              mining.
            </p>
          </div>
          <MoneroGraph width={width} height={height} />
        </section>
        <section className="card New-User-CTA">
          <div className="New-User-CTA-text-wrapper">
            <h2 className="New-User-CTA-title New-User-CTA-title-md">Monero's Privacy Features</h2>
            <p className="New-User-CTA-text">
              Monero integrates several privacy-enhancing technologies:
            </p>
            <ul>
              <li>
                <p className="New-User-CTA-text">
                  • Ring Signatures: obscure the sender's identity by mixing their transaction with
                  a group of others, making it infeasible to determine the actual sender.
                </p>
              </li>
              <li>
                <p className="New-User-CTA-text">
                  • Stealth Addresses: generate one-time addresses for each transaction, preventing
                  the linkage of transactions to the recipient's public address.
                </p>
              </li>
              <li>
                <p className="New-User-CTA-text">
                  • Ring Confidential Transactions (RingCT): conceal transaction amounts, ensuring
                  that only the sender and receiver can determine the transferred value.
                </p>
              </li>
            </ul>
            <p className="New-User-CTA-text">
              These features make all Monero transactions confidential by default.
            </p>
          </div>
        </section>
        <MemPool />
        <section className="card New-User-CTA">
          <div className="New-User-CTA-text-wrapper">
            <h2 className="New-User-CTA-title New-User-CTA-title-md">
              Technological Advancements in Monero
            </h2>
            <p className="New-User-CTA-text">
              Monero continuously evolves to enhance its privacy and efficiency:
            </p>
            <ul>
              <li>
                <p className="New-User-CTA-text">
                  • RandomX Algorithm: introduced to resist ASIC mining, favoring CPU miners and
                  promoting decentralization.
                </p>
              </li>
              <li>
                <p className="New-User-CTA-text">
                  • Bulletproofs: implemented to reduce transaction sizes and fees while maintaining
                  privacy.
                </p>
              </li>
              <li>
                <p className="New-User-CTA-text">
                  • Ongoing Research: the Monero community actively researches and integrates
                  advancements to bolster security and scalability, ensuring the network adapts to
                  emerging challenges.
                </p>
              </li>
            </ul>
          </div>
        </section>
        <Blocks />
        <section className="card New-User-CTA">
          <div className="New-User-CTA-text-wrapper">
            <h2 className="New-User-CTA-title New-User-CTA-title-md">
              Keeping Up with Monero News
            </h2>
            <p className="New-User-CTA-text">
              Staying informed about Monero's developments is crucial for users and enthusiasts:
            </p>
            <ul>
              <li>
                <p className="New-User-CTA-text">
                  • Official Blog: provides updates on software releases, network upgrades, and
                  community news.
                </p>
              </li>
              <li>
                <p className="New-User-CTA-text">
                  • Cryptocurrency News: platforms like Cointelegraph and Decrypt offer news
                  articles and analyses on Monero's market performance and technological progress.
                </p>
              </li>
              <li>
                <p className="New-User-CTA-text">
                  • Community Forums: engaging with the Monero community on forums and social media
                  channels can provide insights and real-time discussions on the recent
                  developments.
                </p>
              </li>
            </ul>
          </div>
        </section>
        <MetaTags>
          <title>Monero Information Hub: Privacy, Technology, and Updates | XMRscan</title>
          <meta
            name="description"
            content="Learn about Monero's technologies behind its privacy features and explore the sources of the latest XMR updates."
          />
          <meta
            property="og:title"
            content="Monero Information Hub: Privacy, Technology, and Updates | XMRscan"
          />
          <meta
            name="og:title"
            content="Monero Information Hub: Privacy, Technology, and Updates | XMRscan"
          />
          <meta
            name="og:description"
            content="Learn about Monero's technologies behind its privacy features and explore the sources of the latest XMR updates."
          />
          <meta property="og:url" content="https://xmrscan.org/" />
          <meta property="og:type" content="website" />
          <meta
            name="twitter:description"
            content="Learn about Monero's technologies behind its privacy features and explore the sources of the latest XMR updates."
          />
          <meta
            name="twitter:title"
            content="Monero Information Hub: Privacy, Technology, and Updates | XMRscan"
          />
          <meta name="application-name" content="XMRScan" />
          <meta name="apple-mobile-web-app-title" content="XMRScan" />
          <script type="application/ld+json">{structuredJSON}</script>
          <link rel="canonical" href="https://xmrscan.org/insights/monero-info-hub" />
        </MetaTags>
        <section className="promo">
          <h3>FAQs about Monero Privacy</h3>
          <p>
            Can Monero transactions be traced?<br />
            Monero’s privacy features make tracing transactions extremely difficult.
          </p>

          <p>
            Is Monero completely anonymous?<br />
            While highly private, no system is entirely immune to sophisticated analysis.
          </p>
        </section>
      </>
    );
  }
}
