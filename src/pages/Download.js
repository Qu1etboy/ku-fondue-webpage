import { useEffect } from "react";
import { saveAs } from "file-saver";

const Download = () => {
  useEffect(() => {
    document.title = "Download - KU Compaint";
  }, []);

  const downloadFile = () => {
    saveAs(
      "https://www.4shared.com/file/wlaOpZF1ea/CS211-Project-10-SNAPSHOT-shad.html",
      "ku-complaint-0.0.1"
    );
  };

  return (
    <div className="container mx-auto max-w-[1024px] p-5 mt-5">
      <div className="text-3xl font-bold">Download</div>
      <div className="text-3xl font-bold mt-5">Windows and Mac</div>
      <table className="table-auto border w-full mt-5">
        <thead className="border text-left">
          <tr>
            <th className="border p-2">Release</th>
            <th className="border p-2">Publish</th>
            <th className="border p-2">Download</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border">
            <td className="border p-2">Version beta 0.0.1</td>
            <td className="border p-2">12/08/2022</td>
            <td className="border p-2">
              <button
                onClick={downloadFile}
                className="text-blue-500 underline"
              >
                download
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Download;
