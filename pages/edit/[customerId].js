import React, { useEffect, useState } from "react";
import Edit from "../../components/template/Edit/Edit";
import { useRouter } from "next/router";

const Index = () => {
  const [data, setData] = useState(null);

  const {
    query: { customerId },
    isReady,
  } = useRouter();

  useEffect(() => {
    if (isReady) {
      fetch(`/api/customer/${customerId}`)
        .then((res) => res.json())
        .then((data) => setData(data.data));
    }
  }, []);

  if (data) {
    return <Edit id={customerId} data={data} />;
  }
};

export default Index;
