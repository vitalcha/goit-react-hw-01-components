import React from "react";
import Profile from "./Profile/Profile";
import Statistics from "./statistics/Statistics";
import statistics from "./statistics/statistics-data.json";
import user from "./user.json";
import FriendsList from "./Friends/Friends";
import friends from "./Friends/friends.json";
import transactions from "./TransactionHistory/transactions.json";
import TransactionHistory from "./TransactionHistory/TransactionHistory";

const App = () => (
  <>
    <Profile user={user} />
    <Statistics statistics={statistics} />
    <FriendsList friends={friends} />
    <TransactionHistory transactions={transactions} />
  </>
);

export default App;
