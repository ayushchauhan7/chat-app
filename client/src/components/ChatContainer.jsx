import React from 'react';
import assets, {messagesDummyData} from "../assets/assets.js";

const ChatContainer = ({selectedUser, setSelectedUser}) => {
	return selectedUser ? (
		<div className='h-full overflow-scroll relative backdrop-blur-lg'>
			<div className='flex items-center gap-3 py-3 mx-4 border-b border-stone-500'>
				<img src={assets.profile_martin} alt="" className='w-8 rounded-full' />
				<p className='flex-1 text-lg text-white flex items-center gap-2'>
					Martin Johnson
					<span className='w-2 h-2 rounded-full bg-green-500'></span>
				</p>
				<img onClick={() => setSelectedUser(null)} src={assets.arrow_icon} alt="" className='md:hidden max-w-7' />
				<img src={assets.help_icon} alt="" className='max-md:hidden max-w-5' />
			</div>

			<div className='flex flex-col h-[calc(100%-120px)] overflow-y-scroll p-3 pb-6'>
				{messagesDummyData.map((msg, index) => (
					<div key={index} className={`flex items-end gap-2 justify-end ${msg.senderId !== '680f50e4f10f3cd28382ecf9' && 'flex-row-reverse'}`}>

					</div>
				))}
			</div>
		</div>
	) : (
		<div className='flex flex-col items-center justify-center gap-2 text-gray-500 bg-white/10 max-md:hidden'>
			<img src={assets.logo_icon} className='max-w-16' alt=""/>
			<p className='text-lg font-medium text-white'>Chat anytime, anywhere</p>
		</div>
	)
}

export default ChatContainer;
