"""
与地图相关的类
"""
from typing import Literal


class MapBlock:
    """
    地图方块类
    """
    def __init__(self, color: str, position: list[int], is_deliver: bool = False):
        """
        创建一个记录地图方块数据的实例
        :param color: 方块颜色
        :param position: 位置坐标（y，x）
        :param is_deliver: 是否是超远距离传送的方块
        """
        self.color = color
        self.position = position
        self.is_deliver = is_deliver
        # 超远距离传送时路径上可摧毁的坐标
        self.deliver_damage_position: None | list[int] = None
        # 用于记录飞行的目标坐标
        self.dest_position: None | list[int] = None


class GameMap:
    """
    游戏地图管理类
    """
    def __init__(self, map_type: Literal['classic', 'adventure'] = 'classic' ):
        """
        创建一个地图实例
        :parameter map_type:
        """
        # 创建经典地图
        if map_type == 'classic':
            # 需要左转的坐标
            self.turn_left_pos = [[4, 3], [11, 4], [3, 10], [10, 11]]
            # 左转后的目标坐标
            self.turn_left_pos_dest = [[3, 4], [10, 3], [4, 11], [11, 10]]
            # 左转后的向量
            self.left_finish_vector_list = [[-1, 0], [0, -1], [0, 1], [1, 0]]
            # 需要右转的坐标
            self.turn_right_pos = [[4, 0], [0, 4], [0, 10], [4, 14], [10, 14], [14, 10], [14, 4], [10, 0]]
            # 右转后的向量
            self.right_vector_list = [[0, 1], [0, 1], [1, 0], [1, 0], [0, -1], [0, -1], [-1, 0], [-1, 0]]
            # 创建初始地图
            self.map_data = [[MapBlock('白', [i, j]) for i in range(15)] for j in range(15)]
            # 存储所有路径的坐标（终点最后的6格除外）
            self.path_block_list: list[MapBlock] = []
            # 当前坐标
            now_pos = [4, 0]
            # 当前向量
            now_vec = [0, 1]
            # 所有地图方块类型列表
            map_block_type_list = ['红', '黄', '绿', '蓝']
            map_block_type_list_index = 0
            # 生成环形详细地图信息
            while True:
                y, x = now_pos
                # 更正颜色
                self.map_data[y][x].color = map_block_type_list[map_block_type_list_index]
                # 下一步的坐标
                next_pos = [y + now_vec[0], x + now_vec[1]]
                map_block_type_list_index += 1
                if map_block_type_list_index == 4:
                    # 重置循环坐标
                    map_block_type_list_index = 0
                # 路径左转情况
                if now_pos in self.turn_left_pos:
                    index = self.turn_left_pos.index(now_pos)
                    # 因为这玩意儿是斜着走的，所以要单独处理
                    next_pos = self.turn_left_pos_dest[index]
                    now_vec = self.left_finish_vector_list[index]
                # 路径右转情况
                elif now_pos in self.turn_right_pos:
                    now_vec = self.right_vector_list[self.turn_right_pos.index(now_pos)]
                    next_pos = [y + now_vec[0], x + now_vec[1]]
                now_pos = next_pos
                # 添加至总路径
                self.path_block_list.append(self.map_data[y][x])
                # 绕回原点，结束循环
                if now_pos == [4, 0]:
                    break

            # 设置地图格子的目标飞行位置
            list_length = len(self.path_block_list)
            for index in range(list_length):
                dest_index = index + 4
                if dest_index >= list_length:
                    dest_index -= list_length
                self.path_block_list[index].dest_position = self.path_block_list[dest_index].position

            # 设置终点前的飞行目标位置为None
            self.map_data[0][7].dest_position = None # 绿
            self.map_data[7][14].dest_position = None # 蓝
            self.map_data[14][7].dest_position = None # 红
            self.map_data[7][0].dest_position = None # 黄

            # 更正超远飞行地图块的目标位置
            self.map_data[3][4].dest_position = [3, 10] # 红色传送点
            self.map_data[3][4].is_deliver = True # 标记为超远距离传送
            self.map_data[3][4].deliver_damage_position = [3, 7] # 轰炸位置
            self.map_data[10][3].dest_position = [4, 3] # 蓝色传送点
            self.map_data[10][3].is_deliver = True # 标记为超远距离传送
            self.map_data[10][3].deliver_damage_position = [7, 3] # 轰炸位置
            self.map_data[4][11].dest_position = [10, 11] # 黄色传送点
            self.map_data[4][11].is_deliver = True # 标记为超远距离传送
            self.map_data[4][11].deliver_damage_position = [7, 11] # 轰炸位置
            self.map_data[11][10].dest_position = [11, 4] # 绿色传送点
            self.map_data[11][10].is_deliver = True # 标记为超远距离传送
            self.map_data[11][10].deliver_damage_position = [11, 7] # 轰炸位置

            # 更正终点路径的颜色
            for i in range(1, 7):
                self.map_data[7][i].color = "黄"
                self.map_data[i][7].color = "绿"
                self.map_data[14 - i][7].color = "红"
                self.map_data[7][14 - i].color = "蓝"

        # 创建冒险地图
        elif map_type == 'adventure':
            # 需要左转的坐标
            self.turn_left_pos = [[4, 3], [11, 4], [3, 10], [10, 11]]
            # 左转后的目标坐标
            self.turn_left_pos_dest = [[3, 4], [10, 3], [4, 11], [11, 10]]
            # 左转后的向量
            self.left_finish_vector_list = [[-1, 0], [0, -1], [0, 1], [1, 0]]
            # 需要右转的坐标
            self.turn_right_pos = [[4, 0], [0, 4], [0, 10], [4, 14], [10, 14], [14, 10], [14, 4], [10, 0]]
            # 右转后的向量
            self.right_vector_list = [[0, 1], [0, 1], [1, 0], [1, 0], [0, -1], [0, -1], [-1, 0], [-1, 0]]
            # 创建初始地图
            self.map_data = [[MapBlock('白', [i, j]) for i in range(15)] for j in range(15)]
            # 存储所有路径的坐标（终点最后的6格除外）
            self.path_block_list: list[MapBlock] = []
            # 当前坐标
            now_pos = [4, 0]
            # 当前向量
            now_vec = [0, 1]
            # 所有地图方块类型列表
            map_block_type_list = ['红', '黄', '绿', '蓝']
            map_block_type_list_index = 0

            # 生成环形详细地图信息
            while True:
                y, x = now_pos
                # 更正颜色
                self.map_data[y][x].color = map_block_type_list[map_block_type_list_index]
                # 下一步的坐标
                next_pos = [y + now_vec[0], x + now_vec[1]]
                map_block_type_list_index += 1
                if map_block_type_list_index == 4:
                    # 重置循环坐标
                    map_block_type_list_index = 0
                # 路径左转情况
                if now_pos in self.turn_left_pos:
                    index = self.turn_left_pos.index(now_pos)
                    # 因为这玩意儿是斜着走的，所以要单独处理
                    next_pos = self.turn_left_pos_dest[index]
                    now_vec = self.left_finish_vector_list[index]
                # 路径右转情况
                elif now_pos in self.turn_right_pos:
                    now_vec = self.right_vector_list[self.turn_right_pos.index(now_pos)]
                    next_pos = [y + now_vec[0], x + now_vec[1]]
                now_pos = next_pos
                # 添加至总路径
                self.path_block_list.append(self.map_data[y][x])
                # 绕回原点，结束循环
                if now_pos == [4, 0]:
                    break

            # 设置地图格子的目标飞行位置
            list_length = len(self.path_block_list)
            for index in range(list_length):
                dest_index = index + 4
                if dest_index >= list_length:
                    dest_index -= list_length
                self.path_block_list[index].dest_position = self.path_block_list[dest_index].position

            # 设置终点前的飞行目标位置为None
            self.map_data[0][7].dest_position = None  # 绿
            self.map_data[7][14].dest_position = None  # 蓝
            self.map_data[14][7].dest_position = None  # 红
            self.map_data[7][0].dest_position = None  # 黄

            # 更正超远飞行地图块的目标位置
            self.map_data[3][4].dest_position = [3, 10]  # 红色传送点
            self.map_data[3][4].is_deliver = True  # 标记为超远距离传送
            self.map_data[3][4].deliver_damage_position = [3, 7]  # 轰炸位置
            self.map_data[10][3].dest_position = [4, 3]  # 蓝色传送点
            self.map_data[10][3].is_deliver = True  # 标记为超远距离传送
            self.map_data[10][3].deliver_damage_position = [7, 3]  # 轰炸位置
            self.map_data[4][11].dest_position = [10, 11]  # 黄色传送点
            self.map_data[4][11].is_deliver = True  # 标记为超远距离传送
            self.map_data[4][11].deliver_damage_position = [7, 11]  # 轰炸位置
            self.map_data[11][10].dest_position = [11, 4]  # 绿色传送点
            self.map_data[11][10].is_deliver = True  # 标记为超远距离传送
            self.map_data[11][10].deliver_damage_position = [11, 7]  # 轰炸位置

            # 更正终点路径的颜色
            for i in range(1, 7):
                self.map_data[7][i].color = "黄"
                self.map_data[i][7].color = "绿"
                self.map_data[14 - i][7].color = "红"
                self.map_data[7][14 - i].color = "蓝"

GameMap('adventure')