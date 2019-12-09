import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserForms } from '../../actions/formActions';

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
        return (<div>loading</div>)
    return (
        <div>
            {formsStore.forms.map(form =>
                <div key={form._id}>
                    {form.name}
                </div>
            )}
        </div>
    )
}
