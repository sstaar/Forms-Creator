import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserForm } from '../../actions/formActions';

export const FormSubs = ({ match }) => {

    const dispatch = useDispatch();

    const formStore = useSelector(state => state.userForm);

    const [subIndex, setSubIndex] = useState(0);

    useEffect(() => {
        const dispatcher = async () => {
            dispatch(await getUserForm(match.params.name));
        }
        dispatcher();
    }, [dispatch, match.params.name]);

    if (formStore.loading === true)
        return (<div>loading</div>);
    if (formStore.submissions.length === 0)
        return (<div>No subs</div>);
    return (
        <div>
            {formStore.structure.map(input =>
                <div>
                    {`${input.name} : ` + formStore.submissions[subIndex][input.name]}
                </div>
            )}
        </div>
    )
}
