import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './Todos.module.css'

import plusIcon from '../../assets/plus-icon.svg'
import minusIcon from '../../assets/minus-icon.svg'


const Todos = ({todos, onSubstraction, onAddition}) => {
    return (
        <div className={styles.todos}>
            {todos.map((todo, index, arr) => (
                <div key={index}
                className={classnames(styles.todo, {
                    [styles.todoDivider] : !(arr.length === index+1)
                })}>
                    {todo.title}
                    <div className={styles.todoIconWrapper}>
                        <div className={styles.todoCount}>{todo.count}</div>
                        <button onClick={() => onSubstraction(index)} className={styles.todoActionButton}>
                             <img src={minusIcon} />
                        </button>
                        <button onClick={() => onAddition(index)} className={styles.todoActionButton}>
                            <img src={plusIcon} />
                        </button>
                       
                    </div>
                   

                </div>
            ))}
        </div>
    )

}

Todos.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        count: PropTypes.number
    })),
    onSubstraction: PropTypes.func,
    onAddition: PropTypes.func
}


export default Todos