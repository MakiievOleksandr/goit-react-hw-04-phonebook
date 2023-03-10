import PropTypes from 'prop-types';

import css from '../Filter/filter.module.css';

function Filter({ filterContacts, onChangeFilter }) {
  return (
    <label className={css.label}>
      <input
        placeholder="Find contacts by name"
        type="text"
        value={filterContacts}
        name="filterContacts"
        onChange={onChangeFilter}
        className={css.input}
        autoComplete="off"
      />
    </label>
  );
}

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
