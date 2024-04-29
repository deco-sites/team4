import Icon from "../../../components/ui/Icon.tsx";

function InputSearch() {
  return (
    <>
      <div class="border-b-black border-[1px] border-t-transparent border-r-transparent border-l-transparent">
        <input
          type="text"
          class="w-[220px] h-[36px] "
          placeholder="Faça uma busca..."
        />
        <button>
          {<Icon id="inputSearch" size={20} strokeWidth={0.01} />}
        </button>
      </div>
    </>
  );
}

export default InputSearch;
