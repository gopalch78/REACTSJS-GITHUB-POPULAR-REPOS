// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {repositoryItemDetails, setActiveTabId, isActive} = props
  const {id, language} = repositoryItemDetails
  const tabBtnClassName = isActive ? 'tab-button active' : 'tab-button'
  const onClickTab = () => {
    setActiveTabId(id)
  }
  return (
    <li className="tab-item">
      <button type="button" onClick={onClickTab} className={tabBtnClassName}>
        {language}
      </button>
    </li>
  )
}
export default LanguageFilterItem
