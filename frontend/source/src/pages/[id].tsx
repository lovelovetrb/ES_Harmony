import Header from "@/components/Header/Header";
import StudentDetail from "@/components/molecules/StudentDetail/StudentDetail";
import { testStudentData } from "@/test/test_data";

const id = () => {
  {/* TDOO: dataの差し替え */}
    const data = testStudentData;
    return (
        <>
            <Header />
            <StudentDetail data={data} />
        </>
    );
};

export default id;
