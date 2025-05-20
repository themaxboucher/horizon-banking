import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getLoggedInUser } from "@/lib/actions/user.actions";

const Home = async ({ searchParams: { id, page } }: SearchParamProps) => {
  const accounts = [
    {
      id: "1",
      availableBalance: 1250.5,
      currentBalance: 1250.5,
      officialName: "Royal Bank of Canada",
      mask: "1234",
      institutionId: "rbc",
      name: "RBC",
      type: "depository",
      subtype: "checking",
      appwriteItemId: "item_1",
      sharableId: "share_1",
    },
    {
      id: "2",
      availableBalance: 2340.75,
      currentBalance: 2340.75,
      officialName: "TD Canada Trust",
      mask: "5678",
      institutionId: "td",
      name: "TD",
      type: "depository",
      subtype: "checking",
      appwriteItemId: "item_2",
      sharableId: "share_2",
    },
    {
      id: "3",
      availableBalance: 1890.25,
      currentBalance: 1890.25,
      officialName: "Scotiabank",
      mask: "9012",
      institutionId: "scotia",
      name: "Scotiabank",
      type: "depository",
      subtype: "checking",
      appwriteItemId: "item_3",
      sharableId: "share_3",
    },
  ];

  const loggedIn = await getLoggedInUser();

  const transactions = [
    {
      id: "1",
      $id: "trans_1",
      name: "Salary Deposit",
      paymentChannel: "online",
      type: "credit",
      accountId: "1",
      amount: 1250.5,
      pending: false,
      category: "Food and Drink",
      date: "2024-03-15",
      image: "/icons/salary.svg",
      $createdAt: "2024-03-15T10:00:00Z",
      channel: "online",
      senderBankId: "bank_1",
      receiverBankId: "bank_2",
    },
    {
      id: "2",
      $id: "trans_2",
      name: "Grocery Store",
      paymentChannel: "in store",
      type: "debit",
      accountId: "1",
      amount: 45.99,
      pending: false,
      category: "Food and Drink",
      date: "2024-03-14",
      image: "/icons/grocery.svg",
      $createdAt: "2024-03-14T15:30:00Z",
      channel: "in store",
      senderBankId: "bank_1",
      receiverBankId: "bank_3",
    },
    {
      id: "3",
      $id: "trans_3",
      name: "Electric Bill",
      paymentChannel: "online",
      type: "debit",
      accountId: "2",
      amount: 89.99,
      pending: false,
      category: "Transfer",
      date: "2024-03-13",
      image: "/icons/bill.svg",
      $createdAt: "2024-03-13T09:15:00Z",
      channel: "online",
      senderBankId: "bank_2",
      receiverBankId: "bank_4",
    },
    {
      id: "4",
      $id: "trans_4",
      name: "Transfer from Savings",
      paymentChannel: "online",
      type: "credit",
      accountId: "3",
      amount: 500.0,
      pending: false,
      category: "Transfer",
      date: "2024-03-12",
      image: "/icons/transfer.svg",
      $createdAt: "2024-03-12T14:20:00Z",
      channel: "online",
      senderBankId: "bank_3",
      receiverBankId: "bank_1",
    },
  ];

  const banks = [
    {
      $id: "bank_1",
      accountId: "1",
      bankId: "rbc",
      accessToken: "access-sandbox-123",
      fundingSourceUrl: "https://api-sandbox.dwolla.com/funding-sources/123",
      userId: "user_123",
      ...accounts[0],
      sharableId: "share_1",
    },
    {
      $id: "bank_2",
      accountId: "2",
      bankId: "td",
      accessToken: "access-sandbox-456",
      fundingSourceUrl: "https://api-sandbox.dwolla.com/funding-sources/456",
      userId: "user_123",
      ...accounts[1],
      sharableId: "share_2",
    },
    {
      $id: "bank_3",
      accountId: "3",
      bankId: "scotia",
      accessToken: "access-sandbox-789",
      fundingSourceUrl: "https://api-sandbox.dwolla.com/funding-sources/789",
      userId: "user_123",
      ...accounts[2],
      sharableId: "share_3",
    },
  ];

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          {" "}
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />
          <TotalBalanceBox
            accounts={accounts}
            totalBanks={accounts.length}
            totalCurrentBalance={accounts.reduce(
              (total, account) => total + account.currentBalance,
              0
            )}
          />
        </header>
      </div>
      <RightSidebar user={loggedIn} transactions={transactions} banks={banks} />
    </section>
  );
};

export default Home;
