import { useState, useRef, useEffect } from "react";
import "./index.css";

function App() {
  const [text, setText] = useState<string | null>("");
  const [isHidden, setHidden] = useState(false);
  const [settingsActive, setSettingsActive] = useState(false);
  const [fontSize, setFontSize] = useState(12);
  const textRef = useRef<HTMLParagraphElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const addInText = (event) => {
    event.preventDefault();
    setText(event.target.value || "");
    setHidden(true);
  };

  useEffect(() => {
    const textDiv = textRef.current;

    if (textDiv) {
      textDiv.innerText = text || "";
    }
  }, [text]);

  return (
    <div className="w-full h-dvh bg-black text-white/60 p-6 z-0">
      <div
        className="absolute top-0 left-0 flex h-full w-full justify-center items-center"
        style={{ opacity: isHidden ? 0 : 1 }}
      >
        <div className="flex justify-center flex-col h-full w-full mx-12">
          <p className="w-full text-white/60 pb-2">Text input:</p>

          <form
            className="h-2/3 w-full"
            onSubmit={(event) => {
              addInText(event);
            }}
          >
            <textarea
              ref={inputRef}
              className="bg-transparent border-[1px] border-white/30 rounded-md h-full w-full"
              name="input-area"
              id="input-area"
            ></textarea>
            <div className="flex gap-2">
              <button className="border-[1px] border-white/30 rounded-md p-2 w-full" type="submit">
                Submit
              </button>

              <div
                className="flex items-center justify-center w-14 aspect-square border-[1px] border-white/30 rounded-md transition-opacity duration-200 z-50 *:stroke-white/30"
                style={{ opacity: isHidden ? 1 : 0 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
                  />
                </svg>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="absolute top-0 left-0 p-6" style={{ opacity: isHidden ? 0 : 1 }}>
        <p
          ref={textRef}
          className="transition-opacity duration-200"
          style={{
            opacity: isHidden ? 1 : 0,
            fontSize: fontSize + "px",
          }}
        ></p>
      </div>
    </div>
  );
}

export default App;
