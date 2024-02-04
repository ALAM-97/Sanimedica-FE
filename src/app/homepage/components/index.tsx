import Card from "@/components/card";
import { homepageSections } from "@/data";
import Image from "next/image";
import uploadFile from "@/img/icons/upload-file.png";
import Link from "next/link";

type HomepageBodyPropsTypes = {
  loadedFile: string;
  showLoader: boolean;
  onUploadFile: (value: string) => void;
};

const HomepageBody = (props: HomepageBodyPropsTypes) => {
  const { onUploadFile } = props;

  return (
    <>
      {props.loadedFile !== "" ? (
        <>
          <h2 className="mb-5 text-3xl font-bold text-neutral-600">
            Seleziona la tua area di pertinenza:
          </h2>
          <div className="flex gap-5">
            {homepageSections.map((section) => (
              <Link href={section.path} key={section.name}>
                <Card disabled={section.disabled}>
                  <Image
                    src={section.img}
                    alt={section.name}
                    width={200}
                    className=""
                  />
                  <div className="pt-3 text-center font-bold text-2xl w-">
                    {section.name}
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="mb-5 text-center">
            <h2 className="text-3xl font-bold text-neutral-600">
              Nessun file caricato
            </h2>
            <p className="text-xl font-medium text-neutral-400">
              Importa il file mensile che viene generato dall’altro gestionale
            </p>
          </div>
          {props.showLoader ? (
            <div className="pt-10 animate-spin h-20 w-20 rounded-full border-t-2 border-b-2 border-cyan-700" />
          ) : (
            <label htmlFor="fileUpload">
              <Card className="px-20 ">
                <Image
                  src={uploadFile}
                  alt={"Upload file"}
                  width={70}
                  className="mx-auto"
                />
                <div className="pt-3 text-center font-bold text-2xl w-">
                  Carica file
                </div>
              </Card>
              <input
                id="fileUpload"
                type="file"
                className="hidden"
                onChange={(e) => onUploadFile(e.target.value)}
              />
            </label>
          )}
        </>
      )}
    </>
  );
};

export default HomepageBody;
