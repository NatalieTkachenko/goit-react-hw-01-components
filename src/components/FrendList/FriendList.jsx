import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import css from './FriendList.module.css'




export default function FriendList( { friends } )
{
    return ( <ul className={css.friendList}>
        { friends.map( ( friendItem ) => 
            <FriendListItem
                key={friendItem.id}
                avatar={ friendItem.avatar }
                name={ friendItem.name }
                isOnline={friendItem.isOnline}
            />) } 
</ul>)
}

FriendList.propTypes = {
friends: PropTypes.arrayOf(PropTypes.object),
}