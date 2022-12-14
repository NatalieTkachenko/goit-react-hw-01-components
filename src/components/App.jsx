import Profile from './Profile/Profile';
import userData from './Profile/user';
import Statistics from './Statistics/Statistics';
import statisticsData from './Statistics/data';
import Datacleaner from 'utils/datacleaner';
import FriendList from './FrendList/FriendList';
import friends from '../components/FrendList/friends';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/transactions';

import './font.css';

export const App = () => {
  return (
    <div
      style={{
        // height: '120vh',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        width: '100%',
        fontSize: 40,
        color: '#010101',
        background: '#C1D2D9',
        padding: 50,
      }}
    >
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        followers={userData.stats.followers}
        views={userData.stats.views}
        likes={userData.stats.likes}
      />

      <Statistics title={''} stats={Datacleaner(statisticsData)} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};
