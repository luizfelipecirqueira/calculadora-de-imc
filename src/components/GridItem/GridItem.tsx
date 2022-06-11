import { Level } from "../../helpers/imc";
import styles from "./GridItem.module.css";

type Props = {
    item: Level
};

export const GridItem = ({item}: Props) => {
    return (
        <div className={styles.main} style={{backgroundColor: item.color}}>
            <div className={styles.gridTitle}>{item.title}</div>
            <div className={styles.gridInfo}>
                <>
                    IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>
        </div>
    )
}