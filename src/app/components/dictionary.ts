interface ILanguageDictionary {
  en: IDictionary;
  es: IDictionary;
  fr: IDictionary;
  ko: IDictionary;
  zh_CN: IDictionary;
  [language: string]: IDictionary;
}

interface IDictionary {
  ENTER_NAME: string;
  TOGGLE_GEOMETRY: string;
}

const dictionary: ILanguageDictionary = {
  en: {
    ENTER_NAME: 'Enter Name',
    TOGGLE_GEOMETRY: 'Toggle Geometry',
  },
  es: {
    ENTER_NAME: 'Ingrese su nombre',
    TOGGLE_GEOMETRY: 'Geometría de palanca',
  },
  fr: {
    ENTER_NAME: 'Entrez le nom',
    TOGGLE_GEOMETRY: 'Basculer la géométrie',
  },
  ko: {
    ENTER_NAME: '이름을 입력하시오',
    TOGGLE_GEOMETRY: '기하학 토글',
  },
  zh_CN: {
    ENTER_NAME: '输入名字',
    TOGGLE_GEOMETRY: '切换几何',
  },
};

export default dictionary;
