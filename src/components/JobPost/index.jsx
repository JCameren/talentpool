import React from "react";
import { GiPaperClip } from "react-icons/gi";
import { Link } from "react-router-dom";
import { Card, MediumText, SmallText, Spacer, Flex, XSText } from "../../ui";
import { SalaryFocusSpan, DateSpan } from './styles'

const JobPost = ({ post }) => {
  const { _id, title, company, location, salary, createdAt } = post;
  const date = new Date(createdAt)
  const formattedDate = date.toLocaleString('en-US', {day:'numeric', month: 'long', year:'numeric'})
  return (
    <Link to={`/post/${_id}`}>
      <Card>
        <Flex alCenter spaceBetween>
          <MediumText>{title}</MediumText>
          <MediumText>
            <GiPaperClip />
          </MediumText>
        </Flex>
        <Spacer extraSmall />
        <SmallText>{company}</SmallText>
        <Spacer extraSmall />
        <SmallText>{location}</SmallText>
        <Spacer extraSmall />
        <SmallText>
          <SalaryFocusSpan>{salary}</SalaryFocusSpan>
        </SmallText>
        <Spacer extraSmall />
        <XSText>
          <DateSpan>Posted on {formattedDate}</DateSpan>
        </XSText>
      </Card>
    </Link>
  );
};

export default JobPost;