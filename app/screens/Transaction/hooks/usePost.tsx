import * as React from "react";
import * as FR from "firebase/firestore";
import { db } from "../../../../config/firebase";

type Props = {
  value: number | undefined;
  description: string | undefined;
  type: string | undefined;
  total: number;
  fetchData: () => void;
  handleClose: () => void;
};

type Data = {
  type: number;
  description: string;
  value: number;
  balance: number;
  date: FR.FieldValue;
};

const usePost = ({
  description,
  type,
  value = 0,
  total,
  fetchData,
  handleClose,
}: Props) => {
  // const [response, setResponse] = React.useState();
  // const [posting, setPosting] = React.useState(false);

  const createData = async (data: Data) => {
    console.log("hit");
    try {
      // setPosting(true);
      const doc = await FR.addDoc(FR.collection(db, "transactions"), data);
      console.log(doc.id);
    } catch (e) {
      alert("Error");
      console.log(e);
      // setPosting(false);
    } finally {
      alert("Tapos na");
      fetchData();
      handleClose();
    }
  };

  const save = () => {
    console.log(description, type, value);
    if (description === "") {
      alert(
        "beh, walang description, hulaan na lang ba natin kung saan galing yan?"
      );
      return;
    }
    if (value === 0 || isNaN(value)) {
      alert("anong value yan, ayusin mo naman");
      return;
    }

    const data: Data = {
      type: type === "increase" ? 1 : 2,
      description: description || "",
      value,
      balance: value + total,
      date: FR.serverTimestamp(),
    };

    createData(data);
  };

  return {
    createData,
    save,
  };
};

export default usePost;
