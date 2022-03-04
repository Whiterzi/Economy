
import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';

const Searchbar = () => {
    const [value, setValue] = useState('');
    return (
        <div>
            <div className="card" style={{marginRight:'35px'}}>
                <span className="p-input-icon-right">
                    <i className="pi pi-search" />
                    <InputText value={value} onChange={(e) => setValue(e.target.value)} placeholder="Search" style={{height:'30px',textAlign:'left'}} />
                </span>
            </div>
        </div>
    )
}

export default Searchbar;
                 