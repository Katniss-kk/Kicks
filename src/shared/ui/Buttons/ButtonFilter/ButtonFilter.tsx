import { IButtonFilter } from './libs/types';

export default function ButtonFilter({name, children, css, handleClick}: IButtonFilter) {
    return(
        <button className={css} onClick={() => handleClick(name)}>
            {children}
        </button>
    )
}