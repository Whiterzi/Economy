
import { useNavigate, Routes, Route } from 'react-router-dom';
import Header from '../../components/Header/Header.component';
import Page1 from '../Page1/Page1';
import Page2 from '../Page2/Page2';
import Page2ListContent from '../Page2/Page2ListContent';
import GeneralParameters from '../../components/GeneralParamters';

const IdentityVerify = (props) => {
    GeneralParameters.history = useNavigate();
    
    if (localStorage.getItem('token') === undefined) GeneralParameters.history('/login');

    return (
      <Routes>
        <Route path='/' element={<Header />} >
          <Route path='page1' element={<Page1 />} />
          <Route path='page2' element={<Page2 />} >
            <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                  <p>Select an invoice</p>
                </main>
              }
            />
            <Route path=':list' element={<Page2ListContent />} />
          </Route>
          <Route path='*' element={<Page1 />} />
        </Route>
      </Routes>
    )
}

export default IdentityVerify;