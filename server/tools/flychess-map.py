# 需要左转的坐标
turn_left_pos = [[4, 3], [11,4],[3, 10],[10, 11]]
# 左转后的目标坐标
turn_left_pos_dest = [[3, 4], [10,3],[4,11],[11,10]]
# 左转后的向量
left_finish_vector_list = [[-1,0],[0,-1],[0,1],[1,0]]
# 需要右转的坐标
turn_right_pos = [[4, 0], [0,4], [0,10],[4,14],[10, 14],[14,10],[14,4],[10,0]]
# 右转后的向量
right_vector_list = [[0,1],[0,1],[1,0],[1,0],[0,-1],[0,-1],[-1,0],[-1,0]]
# 创建初始地图
map_data = [['一' for i in range(15)] for j in range(15)]
# 所有地图方块类型列表
map_block_type_list = ['红','黄','绿','蓝']
map_block_type_list_index = 0
# 存储所有路径的坐标（终点最后的6格除外）
path_pos_list = []
# 当前坐标
now_pos = [4, 0]
# 当前向量
now_vec = [0, 1]
# 生成详细地图信息
while True:
	y, x = now_pos
	map_data[y][x] = map_block_type_list[map_block_type_list_index]
	next_pos = [y + now_vec[0], x + now_vec[1]]
	map_block_type_list_index += 1
	if map_block_type_list_index == 4:
		map_block_type_list_index = 0
	if now_pos in turn_left_pos:
		index = turn_left_pos.index(now_pos)
		next_pos = turn_left_pos_dest[index]
		now_vec = left_finish_vector_list[index]
	elif now_pos in turn_right_pos:
		now_vec = right_vector_list[turn_right_pos.index(now_pos)]
		next_pos = [y + now_vec[0], x + now_vec[1]]
	now_pos = next_pos
	path_pos_list.append(now_pos)
	if now_pos == [4,0]:
		break

	# 终点列表渲染
	for i in range(1,7):
		map_data[7][i] = "黄"
		map_data[i][7] = "绿"
		map_data[14-i][7] = "红"
		map_data[7][14-i] = "蓝"
index_Y = 0
print("00" + str(['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '11', '12', '13', '14']))
for i in map_data:
	text = str(index_Y)
	if index_Y <= 9:
		text = '0' + text
	print(text + str(i))
	index_Y += 1
