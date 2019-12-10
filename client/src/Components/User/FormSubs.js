import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserForm } from '../../actions/formActions';
import { Button } from '../CustomUI/button/Button'
import { Spinner } from '../CustomUI/spinner/Spinner';

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

    const handleNext = () => {
        if (subIndex + 1 === formStore.submissions.length)
            return setSubIndex(0)
        setSubIndex(subIndex + 1)
    };

    const handlePrevious = () => {
        if (subIndex === 0)
            return setSubIndex(formStore.submissions.length - 1)
        setSubIndex(subIndex - 1)
    };

    if (formStore.loading === true)
        return (<Spinner />);
    if (formStore.submissions.length === 0)
        return (<div className="no-subs">This form has no subs yet</div>);

    return (
        <div className="subs-holder">
            <div className="bts-holder">
                <Button label="Previous" handleClick={handlePrevious} />
                <div className="index-holder" >
                    {subIndex + 1}
                    /
                    {formStore.submissions.length}
                </div>
                <Button label="Next" handleClick={handleNext} />
            </div>
            {formStore.structure.map(input =>
                <div key={input.name} className="sub">
                    <span className="input-label">{`${input.name} `}</span> <span className="input-value"> {formStore.submissions[subIndex][input.name]} </span>
                </div>
            )}
        </div>
    )
}
