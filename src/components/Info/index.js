import PropTypes from 'prop-types'
import styles from './Info.module.css'

const Info = ({todosLength, totalCount, onDelete}) => {
    return (
        <div className={styles.info}>
            <div className={styles.infoTotal}>
                <p>{`Total List: ${todosLength}`}</p>
            </div>
            <div className={styles.infoTotal}>
                <p>{`Total Counts: ${totalCount}`}</p>
            </div>
            <button onClick={onDelete} className={styles.deleteAllButton}>Delete All List</button>
        </div>
    )
}

Info.propTypes = {
    todosLength: PropTypes.number,
    totalCount: PropTypes.number,
    onDelete: PropTypes.func
}

export default Info