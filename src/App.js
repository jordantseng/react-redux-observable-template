import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from './actions/users';

const App = () => {
  const [counter, setCounter] = useState(1);
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUser(counter));
  }, [dispatch, counter]);

  const onIncreaseCounter = () => {
    setCounter((counter) => counter + 1);
  };

  return (
    <div>
      <button onClick={onIncreaseCounter}>{counter}</button>

      {loading && <div>loading...</div>}
      {!loading && error && <div>{error.message}</div>}
      {!loading && !error && data && <div>{data.name}</div>}
    </div>
  );
};

export default App;
