import { Profile } from './components/Profile/Profile';
import { Statistics } from './components/Statistics/Statistics';
import { FriendList } from './components/FriendList/FriendList';
import { TransactionHistory } from './components/TransactionHistory/TransactionHistory';
import user from './bases/user.json';
import statisticalData from './bases/statistical-data.json';
import friends from './bases/friends.json';
import transactions from './bases/transactions.json';


const App = () => {
    return (
        <>
            <Profile {...user} />
            <Statistics title="Upload stats" stats={statisticalData} />
            <FriendList friends={friends} />
            <TransactionHistory items={transactions} />
        </>
    );
}

export default App;