import * as React from "react";
import * as FR from "firebase/firestore";
import { db } from "../../../../config/firebase";

type Data = {
  id: string;
  balance: number;
  date: Date;
  description: string;
  value: number;
  type: number;
}[];

const useFetch = () => {
  const [data, setData] = React.useState<Data>();
  const [posting, setPosting] = React.useState(false);

  const fetchData = React.useCallback(async () => {
    try {
      setPosting(true);
      const dbRef = FR.collection(db, "transactions");
      const q = FR.query(dbRef, FR.orderBy("date", "desc"));
      // const ss = await FR.getDocs(FR.collection(db, "transactions"));
      const ss = FR.onSnapshot(q, (qs) => {
        setData(
          qs.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
            date: doc.data().date.toDate(),
          })) as Data
        );
      });
      // const tempData = ss.docs.map((doc, index) => {
      //   return {
      //     id: doc.id,
      //     ...doc.data(),
      //     date: doc.data().date.toDate(),
      //   };
      // }) as Data;

      // setData(tempData);
      setPosting(false);
    } catch (e) {
      alert("Error");
      console.log(e);
      setPosting(false);
    }
  }, []);

  return {
    fetchData,
    data,
    posting,
  };
};

export default useFetch;
