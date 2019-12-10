import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserForms } from '../../actions/formActions';
import { Link } from 'react-router-dom';
import './styles.css';

export const Home = () => {

    const dispatch = useDispatch();

    const formsStore = useSelector(state => state.userForms);

    useEffect(() => {
        const dispatcher = async () => {
            dispatch(await getUserForms())
        }
        dispatcher();
    }, [dispatch]);

    if (formsStore.loading === true)
        return (<div>
        </div>)
    return (
        <div className="forms-holder">
            {formsStore.forms.map(form =>
                <Link key={form._id} className="forms-text" to={`/user/form/${form.name}`} >{form.name}</Link>
            )}
        </div>
    )
}
