import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserForms } from '../../actions/formActions';
import { CheckBox } from '../CustomUI/checkBox/CheckBox';
import { Select } from '../CustomUI/select/Select';
import { Link } from 'react-router-dom';

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
        <div>
            {formsStore.forms.map(form =>
                <div key={form._id}>
                    <Link to={`/user/form/${form.name}`} >{form.name}</Link>

                </div>
            )}
        </div>
    )
}
