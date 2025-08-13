import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import useGameQueryStore from '../store'

const SortSelector = () => {
    const sortOrders = [
        { value: '', label: 'Relevance' },
        { value: '-added', label: 'Date added' },
        { value: 'name', label: 'Name' },
        { value: '-released', label: 'Release date' },
        { value: '-metacritic', label: 'Popularity' },
        { value: '-rating', label: 'Average rating' },
    ]

    const sortOrder = useGameQueryStore(s => s.gameQuery.sortOrder);
    const currentSortOrder = sortOrders.find(order => order.value === sortOrder);

    const setSortOrder = useGameQueryStore(s => s.setSortOrder);
    return (
        <Menu>
            <MenuButton as={Button} leftIcon={<BsChevronDown />}>Order by: {currentSortOrder?.label || 'Relevence'}</MenuButton>
            <MenuList>
                {
                    sortOrders.map(sort =>
                        <MenuItem onClick={() => setSortOrder(sort.value)}
                            key={sort.value} value={sort.value}>
                            {sort.label}
                        </MenuItem>
                    )}
            </MenuList>
        </Menu>
    )
}

export default SortSelector
