import {useState, useEffect} from 'react';

import axios from 'axios';

import type {TypeUserState} from 'state/reducers/user/types';

type TypeAnswerFromServer = TypeUserState;

const useVerifyToken = (token: string): [TypeAnswerFromServer | null, string] => {
    const [start, setStart] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const [answerFromServer, setAnswerFromServer] = useState<null | TypeAnswerFromServer>(null);

    useEffect(() => {
        if (!start) return;

        const verifyTokenOnServer = async () => {
            try {
                const {data} = await axios.post<TypeAnswerFromServer>(
                    'http://localhost:8000/verifyToken',
                    token
                );
                setErrorMessage('');
                setAnswerFromServer(data);
                setStart(false);
            } catch (error) {
                setErrorMessage(error.message);
                setAnswerFromServer(null);
                setStart(false);
            }
        };

        verifyTokenOnServer();
    }, [start]);

    return [answerFromServer, errorMessage];
};

export default useVerifyToken;
