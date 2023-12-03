export const usePersistedValue = (
  elementId: string,
  defaultValue: string = "",
  onChange: any
) => {
  const inputElement = document.getElementById(elementId) as HTMLInputElement;

  if (inputElement) {
    const savedValue = localStorage.getItem(`${elementId}Value`);

    inputElement.value = savedValue || defaultValue;

    inputElement.addEventListener("input", () => {
      localStorage.setItem(`${elementId}Value`, inputElement.value);
      if (onChange) {
        onChange();
      }
    });
  }
};
