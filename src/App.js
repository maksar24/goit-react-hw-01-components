import { Profile } from './components/Profile/Profile';
import { Statistics } from './components/Statistics/Statistics';
import { FriendList } from './components/FriendList/FriendList';
import { TransactionHistory } from './components/TransactionHistory/TransactionHistory';
import { Wrapper } from './components/Wrapper/Wrapper';
import {avatar, name, location, tag, stats} from './bases/user.json';
import statisticalData from './bases/statistical-data.json';
import friends from './bases/friends.json';
import transactions from './bases/transactions.json';


const App = () => {
    return (
        <Wrapper>
            <Profile avatar={avatar} name={name} location={location} tag={tag} stats={stats} />
            <Statistics title="Upload stats" stats={statisticalData} />
            <Statistics stats={statisticalData} />;
            <FriendList friends={friends} />
            <TransactionHistory items={transactions} />
        </Wrapper>
    );
}

export default App;