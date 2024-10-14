from flask import Flask

# 创建Flask应用实例
app = Flask(__name__)


# 定义路由和视图函数
@app.route('/')
def hello_world():
    return '各位向我看齐，我宣布个事儿：我是傻逼!'


if __name__ == '__main__':
    # 启动Flask内置的开发服务器
    app.run(debug = True)
