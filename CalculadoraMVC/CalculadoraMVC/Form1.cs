using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace CalculadoraMVC
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void btnCalcular_Click(object sender, EventArgs e)
        {
            float n1 = (float)Convert.ToDouble(txtNum1);
            float n2 = (float)Convert.ToDouble(txtNum2);
            float res = n1 + n2;
            res = txtRes.Text.ToString(res);

        }
    }
}
