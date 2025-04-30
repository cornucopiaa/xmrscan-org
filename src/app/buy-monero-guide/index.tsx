import * as React from 'react';
import '../home/home.scss';
import { MemPool } from 'components/tables/mempool';
import { Blocks } from 'components/tables/blocks';
import { MoneroGraph } from 'components/line-graph/xmr';
import MetaTags from 'react-meta-tags';

export class BuyMoneroGuide extends React.Component {
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
            <h1 className="New-User-CTA-title">Buying Monero: Step-by-Step Guide</h1>
            <p className="New-User-CTA-text">
              Purchasing Monero can be done through various platforms, including centralized
              exchanges, decentralized markets, and peer-to-peer networks. The process typically
              involves account creation, deposit, and completing the purchase using your preferred
              payment method.
            </p>
            <p className="New-User-CTA-text">
              Always ensure you're using secure and reputable platforms to protect your assets.
            </p>
          </div>
          <MoneroGraph width={width} height={height} />
        </section>
        <section className="card New-User-CTA">
          <div className="New-User-CTA-text-wrapper">
            <p className="New-User-CTA-text">
              Purchasing Monero (XMR) involves the following steps:
            </p>
            <ul>
              <li>
                <p className="New-User-CTA-text">
                  1. Select an exchange that supports XMR purchases, such as Kraken or KuCoin.
                </p>
              </li>
              <li>
                <p className="New-User-CTA-text">
                  2. Register and complete any required identity verification processes.
                </p>
              </li>
              <li>
                <p className="New-User-CTA-text">
                  3. Deposit Funds. Add fiat currency or other cryptocurrencies to your account.
                </p>
              </li>
              <li>
                <p className="New-User-CTA-text">
                  4. Navigate to the trading section, select XMR, and execute your buy order.
                </p>
              </li>
              <li>
                <p className="New-User-CTA-text">
                  5. Optional: for enhanced security, transfer your XMR to a personal wallet, such
                  as a hardware wallet or a trusted software wallet.
                </p>
              </li>
            </ul>
          </div>
        </section>
        <section className="card New-User-CTA">
          <div className="New-User-CTA-text-wrapper">
            <h2 className="New-User-CTA-title New-User-CTA-title-md">Where to Buy Monero</h2>
            <p className="New-User-CTA-text">
              Major exchanges like KuCoin, Kraken, HTX offer XMR trading pairs. P2P platforms like
              Bisq are ideal for users seeking enhanced privacy. It is important to choose platforms
              with robust security measures and a good reputation.
            </p>
          </div>
        </section>
        <MemPool />
        <section className="card New-User-CTA">
          <div className="New-User-CTA-text-wrapper">
            <h2 className="New-User-CTA-title New-User-CTA-title-md">
              Best Payment Methods for Monero
            </h2>
            <p className="New-User-CTA-text">
              Common payment options include bank transfers, credit cards, and other
              cryptocurrencies. P2P platforms may also support cash payments and gift cards.
              Verifying transaction fees and security features is crucial when selecting a method.
            </p>
          </div>
        </section>
        <Blocks />
        <section className="card New-User-CTA">
          <div className="New-User-CTA-text-wrapper">
            <h2 className="New-User-CTA-title New-User-CTA-title-md">
              How to Buy Monero Anonymously
            </h2>
            <p className="New-User-CTA-text">
              For maximum privacy, use decentralized exchanges or P2P networks. Avoid using
              exchanges that require identity verification when anonymity is a priority.
            </p>
          </div>
        </section>
        <MetaTags>
          <title>How to Buy Monero (XMR) Safely | XMRscan</title>
          <meta
            name="description"
            content="Learn how to buy Monero securely. Explore reliable exchanges, payment methods, and tips for buying XMR anonymously."
          />
          <meta property="og:title" content="How to Buy Monero (XMR) Safely | XMRscan" />
          <meta name="og:title" content="How to Buy Monero (XMR) Safely | XMRscan" />
          <meta
            name="og:description"
            content="Learn how to buy Monero securely. Explore reliable exchanges, payment methods, and tips for buying XMR anonymously."
          />
          <meta property="og:url" content="https://xmrscan.org/" />
          <meta property="og:type" content="website" />
          <meta
            name="twitter:description"
            content="Learn how to buy Monero securely. Explore reliable exchanges, payment methods, and tips for buying XMR anonymously."
          />
          <meta name="twitter:title" content="How to Buy Monero (XMR) Safely | XMRscan" />
          <meta name="application-name" content="XMRScan" />
          <meta name="apple-mobile-web-app-title" content="XMRScan" />
          <script type="application/ld+json">{structuredJSON}</script>
          <link rel="canonical" href="https://xmrscan.org/" />
        </MetaTags>
        <section className="promo">
          <h3>FAQs about Buying Monero</h3>
          <p>
            Where can I buy Monero without KYC?<br />
            Decentralized exchanges like Bisq allow users to buy Monero without identity
            verification. However, always exercise caution to avoid scams.
          </p>

          <p>
            Can I use my credit card to purchase Monero?<br />
            Yes, some centralized exchanges like Kraken allow credit card purchases. Be mindful of
            transaction fees and verification requirements.
          </p>

          <p>
            Is buying Monero anonymous?<br />
            The level of anonymity depends on the platform. Centralized exchanges typically require
            KYC, while decentralized and P2P options offer more privacy.
          </p>
        </section>
      </>
    );
  }
}
