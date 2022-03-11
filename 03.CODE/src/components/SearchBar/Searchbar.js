
import { InputText } from 'primereact/inputtext';

/*
--props
[Searchvalue, onSearching] = [value , onSearching] from GreenMatchList
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
                 