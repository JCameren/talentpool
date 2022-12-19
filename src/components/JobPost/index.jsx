import React from 'react'
import { GiPaperClip } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { Card, MediumText, Spacer } from '../../ui'
import { PostIconWrapper } from './styles'

const JobPost = ({ post }) => {
  return (
    <Link to={`/post/${post._id}`}>
        <Card>
            <PostIconWrapper>
                <GiPaperClip />
            </PostIconWrapper>
            <Spacer small />
            <MediumText>{post.title}</MediumText>
        </Card>
    </Link>
  )
}

export default JobPost