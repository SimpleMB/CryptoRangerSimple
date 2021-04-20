import { useState, useEffect } from 'react';
import styles from './FormPaymentAddress.module.scss';

interface PaymentProps {
  btcAddress?: string;
  ethAddress?: string;
  ltcAddress?: string;
}

const FormPaymentAddress: React.FC<PaymentProps> = ({
  btcAddress,
  ethAddress,
  ltcAddress,
}) => {
  const [currency, setCurrency] = useState<string>();
  const [address, setAddress] = useState<string>(
    'Please choose currency above'
  );
  const [buttonText, setButtonText] = useState<string>(
    'Please choose currency above'
  );
  const [isCopied, setIsCopied] = useState<boolean>(false);

  useEffect(() => {
    if (btcAddress) {
      setCurrency('BTC');
      setAddress(btcAddress);
    }

    if (ethAddress) {
      setCurrency('ETH');
      setAddress(ethAddress);
    }

    if (ltcAddress) {
      setCurrency('LTC');
      setAddress(ltcAddress);
    }

    setButtonText(`Click to copy ${currency} address`);
  }, [btcAddress, ethAddress, ltcAddress, currency]);

  const copyAddressToClipboard = () => {
    navigator.clipboard.writeText(address).then(
      () => {
        setButtonText(`${currency} address copied!`);
        setIsCopied(true);
      },
      () => setButtonText('Error! Copy address manually :(')
    );
  };

  return (
    <div className={styles.paymentField}>
      <p className={styles.paymentLabel}>{`${currency} payment address:`}</p>
      <p className={styles.paymentAddress}>{address}</p>
      <button
        className={[
          styles.btnCopy,
          isCopied ? styles.btnActive : undefined,
        ].join(' ')}
        type="button"
        onClick={copyAddressToClipboard}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default FormPaymentAddress;
