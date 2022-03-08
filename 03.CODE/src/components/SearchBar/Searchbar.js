
import { InputText } from 'primereact/inputtext';

/*
--props
hook [Searchvalue, onSearching] = [value , onSearching]
*/
const Searchbar = (Search) => {
    return (
        <div>
            <div className="card" style={{marginRight:'35px'}}>
                <span className="p-input-icon-right">
                    <i className="pi pi-search" />
                    <InputText value={Search.value} onChange={(e) => Search.onSearch(e.target.value)} placeholder="Search" style={{height:'30px',textAlign:'left'}} />
                </span>
            </div>
        </div>
    )
}

export default Searchbar;
                 