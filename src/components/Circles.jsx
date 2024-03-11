import styles from '../style/circles.module.css';

//todo: lägg till mer props att ändra backgroundColor
const Circles = ({ image, imgSrc, altTxt }) => {
    return (
            <div>
                <span style={ {height: 300, width: 300, borderRadius: '50%', position: 'absolute', backgroundColor: '#9A8478'}}></span>
                <span style={{ height: 400, width: 400, borderRadius: '50%', position: 'absolute', marginLeft: 120, top: 60, background: '#C4A484' }}>
                    {image ?  <img src={imgSrc} alt={altTxt} style={styles.squareImg} /> : null}
                </span>
            </div>
    )
}

export default Circles;