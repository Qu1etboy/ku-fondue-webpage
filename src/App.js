import { Button } from "@material-tailwind/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { saveAs } from "file-saver";
import Content from "./components/Content";
import "./App.css";

function App() {
  useEffect(() => {
    document.title = "KU Compaint";
  }, []);

  const downloadFile = () => {
    saveAs(
      "https://github.com/CS211-651/project211-loveandjava/raw/main/jar/CS211-Project-1.0-SNAPSHOT-shaded.jar",
      "ku-complaint-0.0.1"
    );
  };

  return (
    <div>
      <div className="w-full hero h-screen md:h-auto">
        <div className="container min-h-[80vh] mx-auto max-w-[1024px] p-5 flex flex-col justify-center">
          <div className="mx-auto lg:mx-0 pt-10 md:pt-0`">
            <span className="font-extrabold text-6xl text-green-500">KU</span>
            <span className="text-6xl ml-2 text-white">Complaint</span>
          </div>
          <div className="mt-10 text-white font-semibold text-center lg:text-left">
            โปรแกรมแจ้งเรื่องร้องเรียนภายในมหาวิทยาลัยเกษตรศาสตร์
          </div>
          <div className="flex lg:flex-row flex-col gap-3 justify-center items-center m-5 mt-10">
            <Button color="green" size="lg" onClick={downloadFile}>
              Download Latest Version
            </Button>
            <a
              href="https://github.com/CS211-651/project211-loveandjava"
              target="_blank"
              rel="noreferrer"
            >
              <Button color="green" size="lg">
                View source code
              </Button>
            </a>
          </div>
        </div>
      </div>
      <Content title={"มีเรื่องไม่พอใจใช่มั้ย"} row={0}>
        ปัญหาต่างๆที่พบเจอภายในมหาลัยเกษตรศาสตร์ไม่ว่าจะเป็น ปัญหาการเดินทาง
        ปัญหาอาคารสถานที่ชํารุด ปัญหาการจัดกิจกรรมไม่เหมาะสม ๆลๆ
        ปัญหาทั้งหมดท่านสามารถแจ้งเข้ามาได้ผ่านทางโปรแกรม ku complaint
        โดยจะมีเจ้าหน้าที่คอยรับเรื่องและนําไปแก้ไข
        โดยแสดงรายละเอียดของปัญหาพร้อมภาพแนบเพื่อให้เจ้าหน้าที่เข้าไปแก้ไขได้โดยเร็ว
      </Content>
      <Content title={"รวมเรื่องร้องเรียนไว้ในที่เดียว"} row={1}>
        เรื่องร้องเรียนทั้งหมดสามารถดูได้ผ่านทางโปรแกรมโดยแสดงรายละเอียดของปัญหา
        จํานวนโหวตและสถานะว่าดําเนินการไปแล้วหรือยัง
        ถ้าเสร็จสิ้นจะแสดงรายละเอียดการแก้ไขที่เจ้าหน้าที่ตอบกลับมาด้วย
      </Content>
      <Content title={"เลือก Theme ได้ตามใจ"} row={2}>
        โปรแกรมไม่จําเป็นต้องจําเจ โดยเรามีธีมให้เลือกหลากหลาย
        ชอบแบบไหนใช้แบบนั้น จะปรับขนาดฟอนต์ หรือเปลี่ยนฟอนต์ก็ทําได้
      </Content>
      <div className="container mx-auto max-w-[1024px] p-5 flex flex-col items-center gap-5 mb-10">
        <span className="text-3xl font-bold">ลองใช้งานได้เลยตอนนี้</span>
        <Link to="/download">
          <Button color="green" size="lg">
            Download
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default App;
