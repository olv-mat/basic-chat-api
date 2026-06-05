import { ApiParam } from '@nestjs/swagger';

export const MessageIdParm = () => {
  return ApiParam({ name: 'id', description: 'Unique message identifier' });
};

export const UserIdParam = () => {
  return ApiParam({ name: 'id', description: 'Unique user identifier' });
};
