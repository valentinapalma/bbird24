import styles from '../../style/contactusbanner.module.css';
import Text from '../global/Text';
import Button from '../global/Button';

const ContactUsBanner = ({ heading, lead, paragraph, paragraph2, label }) => {
  return (
    <div className={styles.bgcontainer + ' py-5 my-3 my-lg-5'}>
      <div className={styles.parent + ' container'}>
        <div className="row h-100 align-content-center">
          <div className={styles.text + " col-12 text-center"}>
            <Text heading={heading} lead={lead} paragraph={paragraph} paragraph2={paragraph2 }/> 
            <Button label={label} link={"mailto:info@bbird.ch"} />           
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsBanner;
