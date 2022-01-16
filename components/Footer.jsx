import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src="/img/bg.png" alt="" objectFit="cover" layout="fill"/>
            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                    <h2 className={styles.motto}>
                        OH YES, WE DID. THE LAMA PIZZA, WELL BAKED SLICE OF PIZZA
                    </h2>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
                    <p className={styles.text}>
                        1654 R. Don Road #0900
                        <br/> NewYork, 85022
                        <br/> (054) 124 0558
                    </p>
                    <p className={styles.text}>
                        1654 R. Don Road #0900
                        <br/> NewYork, 85022
                        <br/> (054) 124 0558
                    </p>
                    <p className={styles.text}>
                        1654 R. Don Road #0900
                        <br/> NewYork, 85022
                        <br/> (054) 124 0558
                    </p>
                    <p className={styles.text}>
                        1654 R. Don Road #0900
                        <br/> NewYork, 85022
                        <br/> (054) 124 0558
                    </p>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>WORKING HOURS</h1>
                    <p className={styles.text}>
                        MONDAY - FRIDAY
                        <br/> 9:00AM - 10:00PM
                    </p>
                    <p className={styles.text}>
                        SATURDAY - SUNDAY
                        <br/> 12:00PM - 12:00AM
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
