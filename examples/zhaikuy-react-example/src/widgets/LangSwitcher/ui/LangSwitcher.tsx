import { useTranslation } from 'react-i18next'
import { LanguageAbbs, lngs } from '@/shared/lib/consts/lng'
import { Languages } from 'lucide-react';

export const LangSwitcher = () => {
  const { i18n } = useTranslation();

  const onLangChange = (lng: string) => () => {
    i18n.changeLanguage(lng)
  }

  return (
    <div className='dropdown'>
      <label tabIndex={0} className="btn btn-ghost">
        <Languages /> 
        <span className='lg:inline-block sm:hidden capitalize'>
          {lngs[i18n.resolvedLanguage as LanguageAbbs].nativeName}
        </span>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {Object.keys(lngs).map((lng) => (
          <li key={lng}>
            <button
              type="button"
              onClick={onLangChange(lng)}
              disabled={i18n.resolvedLanguage === lng}
            >
              {lngs[lng as LanguageAbbs].nativeName}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}